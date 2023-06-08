import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBreadCrumbs } from "@/hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCourse,
  courseActions,
  getSingleCourse,
  coursesSelector,
} from "@/store";
import { Form } from "antd";
import { Title } from "@/components";
import { CourseForm } from "../Form";
import { courseDictionary } from "../dictionary";
import { upload, loadings } from "@/utils";
import { courseDetailsBreadcrumb } from "../constants";

export const CourseDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    data: { course },
    loading,
  } = useSelector(coursesSelector);
  const [form] = Form.useForm();
  const [files, setFiles] = useState({ image: [], presentation: [] });

  const handleUpdate = async (values) => {
    dispatch(courseActions.setLoading(loadings.put));

    const { image, presentation } = files;

    if (image[0]?.originFileObj) {
      values.image = await upload(image[0].originFileObj);
    }

    if (presentation[0]?.originFileObj) {
      values.presentation = await upload(presentation[0].originFileObj);
    }

    const params = {
      id,
      ...values,
    };

    dispatch(updateCourse(params));
  };

  const getData = () => {
    if (!id) {
      history.back();
    }

    dispatch(getSingleCourse({ id }));
  };

  const setData = () => {
    if (course) {
      for (let key in course) {
        form.setFieldsValue({ [key]: course[key] });
      }

      const image = [
        {
          uid: course.id,
          name: course.image,
          status: "done",
          url: course.image,
        },
      ];

      const presentation = [
        {
          uid: course.id,
          name: course.presentation,
          status: "done",
          url: course.presentation,
        },
      ];

      setFiles({ image, presentation });
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  useEffect(() => {
    setData();
  }, [course]);

  useBreadCrumbs(courseDetailsBreadcrumb);

  return (
    <>
      <Title>{courseDictionary.courseDetails}</Title>

      <CourseForm
        form={form}
        loading={loading.put}
        files={files}
        setFiles={setFiles}
        onFinish={handleUpdate}
      />
    </>
  );
};
