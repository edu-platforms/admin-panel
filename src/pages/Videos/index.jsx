import { useBreadCrumbs } from "@/hooks";
import { videoAllBreadcrumb } from "./constants";
import { useSelector } from "react-redux";
import { videosSelector } from "@/store";
import { MainSearch, Header } from "@/components";
import { Filter } from "./Filter";
import { VideoTable } from "./Table";
import { VideoModal } from "./Modal";
import { videosDictionary } from "./dictionary";

export const AllVideos = () => {
  const { filterTab, videoModal } = useSelector(videosSelector);

  useBreadCrumbs(videoAllBreadcrumb);

  return (
    <>
      <Header route='Videos' title={videosDictionary.title} />
      <MainSearch />
      {filterTab ? <Filter /> : null}
      {videoModal ? <VideoModal link='https://youtu.be/yVEwi0wd_Mg' /> : null}
      <VideoTable />
    </>
  );
};
