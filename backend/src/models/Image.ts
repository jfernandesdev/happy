import { Column } from "typeorm";

export default class Image {

  @Column()
  path: string;

  construtor(path: string) {
    this.path = path;
  }
}