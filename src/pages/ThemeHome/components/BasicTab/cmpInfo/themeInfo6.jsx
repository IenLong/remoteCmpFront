import React from "react";
import './InfomStyle.css'



export default class ThemeInfo6 extends React.Component {
  static displayName = 'ThemeInfo6';

  render(){

    return (
      <div className={'info-paragraph'}>
      <p>
        主题六：遥感图像场景分类&nbsp;
      </p>
      <p>
      <br/>
      </p>
    <p>
      （1） 竞赛说明
    </p>
    <p>
    &nbsp; &nbsp; &nbsp;&nbsp;◼ 竞赛任务：遥感图像场景分类是指从多幅遥感图像中区分出具有相似场
    景特征的图像，并对这些图像进行分类，为每一幅遥感图像赋予场景类
    别标签。本项竞赛针对包含典型的遥感图像场景对象，参赛队伍使用主
    办方提供的数据对指定的遥感图像进行场景分类，主办方依据评分标准
    对遥感图像场景分类结果进行综合评价。
  </p>
  <p>
    &nbsp; &nbsp; &nbsp; ◼ 竞赛目的：遥感图像场景分类竞赛任务旨在对空间信息网络中场景级的
    遥感图像进行内容解译，高效地对遥感图像中的感兴趣及非感兴趣场景
    进行自动化的识别和区分，进而针对场景类别有选择性的压缩遥感图像，
  减少待传输图像数据的容量，有效缓解数据链路传输压力。
  </p>
  <p>
    <br/>
    </p>
    <p>
      （2） 竞赛数据准备
    </p>
    <p>
    &nbsp; &nbsp; &nbsp; ◼ 数据类型：谷歌地球遥感图像，空间分辨率为 0.12 ~ 12.4 米&nbsp;
  </p>
  <p>
    &nbsp; &nbsp; &nbsp; ◼ 场景类型：农业用地，商业用地，工业用地，公共服务区， 居民区，交
    通用地，水域，未利用土地 （8 大类 57 小类）&nbsp;
  </p>
  <p>
    &nbsp; &nbsp; &nbsp;&nbsp;◼ 数据准备：已完成百万级遥感图像场景分类数据集的构建，参考国家土
    地分类标准进行遥感地物场景类别标签组织，面向真实的应用场景，数
    据规模大，场景类别多。竞赛中将提供若干覆盖各类土地利用类型的遥
    感场景图像，其中包含场景的遥感图像数据不少于 30 万幅。
  </p>
  <p>
    &nbsp; &nbsp; &nbsp;&nbsp;◼ 图像尺寸：256 × 256，512&nbsp;×&nbsp;512&nbsp;
  </p>
  <p>
    &nbsp; &nbsp; &nbsp;&nbsp;◼ 图像格式：PNG 格式
    </p>
    <p>
      &nbsp; &nbsp; &nbsp;&nbsp;◼ 数据质量：经过辐射校正和几何校正
    </p>
    <p>
    &nbsp; &nbsp; &nbsp;&nbsp;◼ 数据样本：如图 3-1 所示，展示了本项竞赛数据集部分场景类别（机场、
  裸地、棒球场、山地、公园、停车场、沙滩、(活动中心、桥梁、运动场、
  池塘、港口、教堂、商业区、高密度住宅区、火车站、游乐场、河流、
  沙漠、农田、森林、学校、低密度住宅区、广场、工业区、草地、中密
    度住宅区、体育场、存储罐、高架桥）
  </p>
  <p>
    <br/>
    </p>
      </div>
  );
  };
}

const styles = {
  sOverview: {
    marginTop: '20px',
  },
  textCenter: {
    textAlign: 'center',
    whiteSpace:'pre',
  },
  textRight: {
    textAlign: 'right',
    whiteSpace:'pre',
  },
}
