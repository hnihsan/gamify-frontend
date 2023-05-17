export class MetadataModel {
  challengesCount: number;
  maxPoints: number;
  code: string;

  constructor(obj: any) {
    this.challengesCount = obj.challengesCount;
    this.maxPoints = obj.maxPoints;
    this.code = obj.code;
  }
}
