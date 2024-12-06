import { iSong } from "../../shared/constant/interface";

export type iGetSongResponse = iTopSong[];

interface iTopSong {
  title: string;
  list: iSong[];
}
