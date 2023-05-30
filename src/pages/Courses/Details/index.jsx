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
import { upload, loadings, makeFileUrl } from "@/utils";
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
    dispatch(courseActions.setLoading(loadings.patch));

    const { image, presentation } = files;

    if (image[0]?.originFileObj) {
      values.course_image = await upload(image[0].originFileObj);
    }

    if (presentation[0]?.originFileObj) {
      values.course_presentation = await upload(presentation[0].originFileObj);
    }

    const params = {
      ...values,
      id,
    };

    dispatch(updateCourse(params));
  };

  const getData = () => {
    if (!id) {
      history.back();
    }

    dispatch(getSingleCourse(id));
  };

  const setData = () => {
    if (course) {
      for (let key in course) {
        form.setFieldsValue({ [key]: course[key] });
      }

      const image = [
        {
          uid: course.course_id,
          name: course.course_image,
          status: "done",
          url: makeFileUrl(course.course_image),
        },
      ];

      const presentation = [
        {
          uid: course.course_id,
          name: course.course_presentation,
          status: "done",
          url: makeFileUrl(course.course_presentation),
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
        loading={loading.update}
        files={files}
        setFiles={setFiles}
        onFinish={handleUpdate}
      />
    </>
  );
};
