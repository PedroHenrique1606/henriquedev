"use client";

import {
  ArrowArcLeft,
  ArrowArcRight,
  ArrowsIn,
  CircleNotch,
  CornersOut,
  Pause,
  PictureInPicture,
  Play,
  SpeakerHigh,
} from "@phosphor-icons/react/dist/ssr";
import { Video } from "@triyanox/react-video";

interface VideoPlayerProps {
  sourceVideo: string;
  posterImage: string;
  titleOfVideo: string;
  subtitleOfVideo?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  sourceVideo,
  posterImage,
  titleOfVideo,
  subtitleOfVideo,
}) => {
  const videoProps = {
    src: [
      {
        src: sourceVideo,
        type: "video/mp4",
        label: "SD",
      },
      {
        src: sourceVideo,
        type: "video/mp4",
        label: "HD",
      },
    ],
    poster: posterImage,
    title: titleOfVideo,
    subtitle: subtitleOfVideo,
    onProgress: (currentTime: number) =>
      console.log(`Current Time: ${currentTime}`),
    onDuration: (duration: number) => console.log(`Duration: ${duration}`),
    onEnded: () => console.log("Video Ended"),
    onPlay: () => console.log("Video Played"),
    onPause: () => console.log("Video Paused"),
    onLoad: () => console.log("Video Loaded"),
    onVolumeChange: (volume: number) => console.log(`Volume: ${volume}`),
    onPlaybackRateChange: (rate: number) =>
      console.log(`Playback Rate: ${rate}`),
    className: "custom-video-class",
    autoPlay: false,
    loop: true,
    showControls: true,
    icons: {
      play: () => <Play width={20} weight="fill" color="#ffffff" />,
      pause: () => <Pause width={20} weight="fill" color="#ffffff" />,
      forwardBy10: () => (
        <ArrowArcRight width={20} weight="fill" color="#ffffff" />
      ),
      backBy10: () => <ArrowArcLeft width={20} weight="fill" color="#ffffff" />,
      enterPip: () => (
        <PictureInPicture width={20} weight="fill" color="#ffffff" />
      ),
      exitPip: () => <ArrowsIn width={20} weight="fill" color="#ffffff" />,
      volume: () => <SpeakerHigh width={20} weight="fill" color="#ffffff" />,
      fullScreen: () => <CornersOut width={20} weight="fill" color="#ffffff" />,
      exitFullScreen: () => (
        <ArrowsIn width={20} weight="fill" color="#ffffff" />
      ),
      loading: () => <CircleNotch width={20} weight="fill" color="#ffffff" />,
    },
    classNames: {
      base: "video-base-class",
      title: "video-title-class",
      subtitle: "video-subtitle-class",
      topWrapper: "top-wrapper-class",
      centerWrapper: "center-wrapper-class",
      bottomWrapper: "bottom-wrapper-class",
      video: "video-element-class",
      backdrop: "video-backdrop-class",
      volumeSlider: {
        root: "volume-slider-root-class",
        track: "volume-slider-track-class",
        thumb: "volume-slider-thumb-class",
        range: "volume-slider-range-class",
      },
      playbackRateSlider: {
        root: "playback-rate-slider-root-class",
        track: "playback-rate-slider-track-class",
        thumb: "playback-rate-slider-thumb-class",
        range: "playback-rate-slider-range-class",
      },
    },
    hideSliderThumb: false,
  };

  return <Video {...videoProps} />;
};

export default VideoPlayer;
