import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePaginator } from "@/hooks";
import { useDispatch, useSelector } from "react-redux";
import { getRatings, getTutorDetails, ratingsSelector, usersSelector } from "@/store";
import { Title } from "@/components";
import { Form, Row, Col, Typography, Pagination } from "antd";
import { Feedback } from "../Feedback";
import { ReadOnlyField } from "../Fields";
import { allTutorDictionary } from "../../dictionary";
import { getPaginationParams } from "@/utils";

export const TutorRating = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm();
  const { id } = useParams();
  const { ratings, total } = useSelector(ratingsSelector);
  const { data: { details } } = useSelector(usersSelector);
  const { page, limit, handlePageChange, handleShowSizeChange } =
    usePaginator();

    console.log(details);
  const getData = () => {
    if (!id) {
      history.back();
    }

    dispatch(getTutorDetails({ id }));
    dispatch(getRatings({ id, page, limit }));
  };

  const setData = () => {
    if (details) {
      for (let key in details) {
        form.setFieldsValue({ [key]: details[key] });
      }
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  useEffect(() => {
    setData();
  }, [details]);

  return (
    <>
      <Title>{allTutorDictionary.tutorRating}</Title>

      <Form form={form} layout="vertical" autoComplete="off">
        <Row gutter={12}>
          <Col span={12}>
            <ReadOnlyField
              name="displayName"
              label={allTutorDictionary.displayName} 
              />
          </Col>

          <Col span={12}>
            <ReadOnlyField
              name="createdAt"
             label={allTutorDictionary.join}  
            />
          </Col>

          <Col span={8}>
            <ReadOnlyField
              name={['rating', 'ball']}
              fieldKey
              label={allTutorDictionary.currentRating} 
              />
          </Col>

          <Col span={8}>
            <ReadOnlyField
              name={['event', 'studentCount']}
              label={allTutorDictionary.totalStudents} 
              />
          </Col>

          <Col span={8}>
            <ReadOnlyField
              name=""
              label={allTutorDictionary.talkTime} 
              />
          </Col>
        </Row>
      </Form>

      <Typography.Title level={4}>
        {allTutorDictionary.feedback}
      </Typography.Title>

      {
        ratings.length > 0 ?
          <Row gutter={[12, 12]}>
            {ratings.map((i) => (
              <Col key={i} span={12}>
                <Feedback />
              </Col>
            ))}

            <Pagination 
              onChange={handlePageChange}
              onShowSizeChange={handleShowSizeChange}
              showSizeChanger
              total={total} 
              pageSize={limit}
              defaultCurrent={page} 
              {...getPaginationParams(total)}
            />
        </Row>
        : null
      }
    </>
  );
};
