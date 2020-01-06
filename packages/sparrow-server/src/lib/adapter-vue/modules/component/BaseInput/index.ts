import * as cheerio from 'cheerio';

export default class BaseInput {
  public type = 'form';
  public $fragment: any;

  constructor () {
    this.$fragment = cheerio.load(this.fragment(), {
      xmlMode: true
    });
  }

  private fragment () {
    return `
      <el-form-item label="基础文本框" prop="name">
        <el-input></el-input>
      </el-form-item>
    `;
  }

  public getFragment () {
    return this.$fragment;
  }

}