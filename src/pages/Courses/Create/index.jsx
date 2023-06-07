import { useState } from "react";
import { useBreadCrumbs } from "@/hooks";
import { useDispatch, useSelector } from "react-redux";
import { createCourseAllBreadcrumb } from "../constants";
import { Title } from "@/components";
import { CourseForm } from "../Form";
import { courseActions, createCourse, coursesSelector } from "@/store";
import { upload, loadings } from "@/utils";
import { courseDictionary } from "../dictionary";

export const CreateCourse = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(coursesSelector);
  const [files, setFiles] = useState({ image: [], presentation: [] });

  const handleCreate = async (values) => {
    dispatch(courseActions.setLoading(loadings.post));

    const imageName = await upload(files.image[0].originFileObj);
    const presentationName = await upload(files.presentation[0].originFileObj);

    const params = {
      ...values,
      image: imageName,
      presentation: presentationName,
    };

    dispatch(createCourse(params));
  };

  useBreadCrumbs(createCourseAllBreadcrumb);

  return (
    <div>
      <Title>{courseDictionary.addCourse}</Title>

      <CourseForm
        files={files}
        loading={loading.post}
        setFiles={setFiles}
        onFinish={handleCreate}
      />
    </div>
  );
};
