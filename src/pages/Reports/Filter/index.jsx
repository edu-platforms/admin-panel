import { Col, DatePicker, Form, Input, Row } from "antd";
import { PrimaryBtn } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { videosActions } from "@/store";
import { filterDictionary } from "../dictionary";

export function Filter() {
    const dispatch = useDispatch();
    const { RangePicker } = DatePicker;

    const { studentName, tutorName, dateValue } = useSelector(
        (state) => state.videos.values
    );

    const clearFilter = () => dispatch(videosActions.clear());

    const handleInputChange = (event, date) => {
        if (event.target) {
            dispatch(
                videosActions.updateFilter({
                    name: event.target.name,
                    value: event.target.value,
                })
            );
        } else dispatch(videosActions.updateFilter({ name: "date", value: date }));
    };

    return (
        <div style={{ marginBottom: 40 }}>
            <Form autoComplete="false">
                <Row gutter={12} justify="space-between">
                    <Col span={10}>
                        <Input
                            name="studentName"
                            value={studentName}
                            onChange={(event) => handleInputChange(event)}
                            placeholder={filterDictionary.filterByStudent}
                        />
                    </Col>
                    <Col span={6}>
                        <RangePicker
                            name="date"
                            value={dateValue}
                            onChange={(event, str) => handleInputChange(event, str)}
                            format="MM-DD-YYYY"
                            size="small"
                        />
                    </Col>
                    <Col span={4}>
                        <PrimaryBtn
                            onClick={clearFilter}
                            style={{
                                backgroundColor: "#edeef7",
                                color: "#4763E4",
                            }}
                        >
                            {filterDictionary.clearFilter}
                        </PrimaryBtn>
                    </Col>
                    <Col span={4}>
                        <PrimaryBtn onClick={""}>{filterDictionary.showData}</PrimaryBtn>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}
