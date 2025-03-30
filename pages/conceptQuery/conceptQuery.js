const { concepts } = require('./concepts.js');

Page({
  data: {
    conceptName: '',
    conceptInfo: null
  },
  searchConcept: function () {
    const conceptName = this.data.conceptName.trim();
    console.log('概念查询按钮已点击，查询的概念名称为:', conceptName);

    if (!conceptName) {
      wx.showToast({
        title: '请输入概念名称',
        icon: 'none'
      });
      return;
    }
    
    const conceptInfo = concepts.find(concept => conceptName == concept.name);

    this.setData({
      conceptInfo: conceptInfo || null
    });

    if (conceptInfo) {
      console.log('概念查询成功，返回数据:', conceptInfo);
    } else {
      console.error('概念查询失败，未找到匹配的概念');
      wx.showToast({
        title: '未找到匹配的概念',
        icon: 'none'
      });
    }
  },
  onLoad: function (options) {
    if (options.name) {
      const conceptInfo = concepts.find(concept => concept.name === options.name);
      this.setData({
        conceptName: options.name,
        conceptInfo: conceptInfo || null
      });
    }
    console.log('Concept query loaded:', this.data);
  },
  onConceptNameChange: function (e) {
    const conceptName = e.detail.value; // 获取输入框的值
    this.setData({ conceptName });
    console.log('Concept name updated:', conceptName);
  }
});