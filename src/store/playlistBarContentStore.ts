import { create } from "zustand";
import TPlaylistBar from "@/type/TPlaylistBar";
import playlistBarContent from "@/data/playlistBar";

type TPlaylistBarContentState = {
  playlistBarContent: TPlaylistBar[];
};

type TPlaylistBarContentAction = {
  setPlaylistBarContent: (playlistBarContent: TPlaylistBar[]) => void;
};

const usePlaylistBarContent = create<
  TPlaylistBarContentState & TPlaylistBarContentAction
>((set) => ({
  playlistBarContent: playlistBarContent,
  setPlaylistBarContent: (updatedPlaylistBarContent) =>
    set(() => ({ playlistBarContent: updatedPlaylistBarContent })),
}));

export default usePlaylistBarContent;
