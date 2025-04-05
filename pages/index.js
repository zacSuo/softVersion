const { piDigits } = require('./piDigits.js'); // 引入π的前80000位数字
const { concepts } = require('./concepts.js');
const { softwareCompatibility, softwareList } = require('./softwareCompatibility.js'); // 引入软件兼容性数据

Page({
  data: {
    currentTab: 0,
    conceptName: '',
    results: [],
    conceptInfo: null,
    softwareList: [], // 确保软件列表已初始化
    selectedSoftware: '',
    softwareVersion: '',
    errorMessage: '',
    compatibilityInfo: null,
    piDigitIndex: '',
    piDigitResult: '',
    versionList: [], // 新增版本列表
    selectedVersion: '', // 新增选中的版本
  },
  onLoad: function (options) {
    const { name, version } = options;
    this.setData({
      softwareName: name || '',
      softwareVersion: version || '',
      softwareList: softwareList, // 确保软件列表正确加载
      selectedSoftware: name || '' // 如果有传入软件名称，设置为默认选中
    });
    console.log('Software compatibility query loaded:', this.data);
    
    const conceptInfo = concepts.find(concept => concept.name === options.name);
    this.setData({
      conceptName: options.name,
      conceptInfo: conceptInfo || null,
      results: [] // 清空 results
    });
    
    console.log('Concept query loaded:', this.data);
    this.fetchSoftwareList(); // 调用获取软件列表的方法
  },
  onPiDigitIndexChange: function (e) {
    const piDigitIndex = e.detail.value; // 获取输入框的值
    this.setData({ 
      piDigitIndex,
      piDigitResult: '' // 清空之前的查询结果
    });
    console.log('Pi digit index updated:', piDigitIndex);
  },
  searchPiDigit: function () {
    const piDigitIndex = parseInt(this.data.piDigitIndex, 10);

    if (isNaN(piDigitIndex) || piDigitIndex <= 0 || piDigitIndex > 7500 || piDigits.length < piDigitIndex) {
      wx.showToast({
        title: '请输入1到7400之间的数字',
        icon: 'none'
      });
      return;
    }

    const piDigitResult = piDigits[piDigitIndex - 1]; // 获取π的第n位数字
    this.setData({ piDigitResult });
    console.log('Pi digit result:', piDigitResult);
  },
  switchTab: function (e) {
    const index = e.currentTarget.dataset.index;
    this.setData({ currentTab: index });
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
    
    // 修正这里的比较逻辑
    const conceptInfo = concepts.find(concept => concept.name === conceptName);

    this.setData({
      conceptInfo: conceptInfo || null,
      results: [] // 清空 results
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
  onConceptNameChange: function (e) {
    const conceptName = e.detail.value; // 获取输入框的值
    this.setData({ conceptName });
    console.log('Concept name updated:', conceptName); // 添加调试信息
    this.performSearch(conceptName); // 调用 performSearch 方法
  },
  performSearch: function(query) {
    // 添加正则匹配，匹配前缀
    const regex = new RegExp(`^${query}`, 'i'); // 'i' 表示不区分大小写，'^' 表示匹配前缀
    const results = concepts.filter(concept => regex.test(concept.name));
    this.setData({ results }); // 更新 results
  },
  onBlur() {
    // 输入框失去焦点时，恢复页面布局
    this.setData({ inputFocused: false });
  },
  selectConcept: function(e) {
    const selectedName = e.currentTarget.dataset.name;
    const conceptInfo = concepts.find(concept => concept.name === selectedName);
    this.setData({
      conceptName: selectedName,
      conceptInfo: conceptInfo || null,
      results: [] // 清空 results
    });
    console.log('Selected concept:', conceptInfo);
  },
  onSoftwareVersionChange: function (e) {
    this.setData({
      softwareVersion: e.detail.value
    });
  },
  onPickerChange: function (e) {
    const index = e.detail.value;
    const selectedSoftware = this.data.softwareList[index].name;
    const softwareInfo = softwareCompatibility.find(software => software.name === selectedSoftware);

    this.setData({
      selectedSoftware,
      softwareName: selectedSoftware,
      versionList: softwareInfo ? softwareInfo.versions.map(version => version.version) : [], // 更新版本列表
      selectedVersion: '' // 清空选中的版本
    });
    console.log('Selected software:', selectedSoftware);
  },
  onVersionPickerChange: function (e) {
    const index = e.detail.value;
    const selectedVersion = this.data.versionList[index];
    this.setData({ selectedVersion, softwareVersion: selectedVersion }); // 同步版本
    console.log('Selected version:', selectedVersion);

    const softwareInfo = softwareCompatibility.find(software => software.name === this.data.selectedSoftware);
    if (softwareInfo) {
      const versionInfo = softwareInfo.versions.find(version => version.version === selectedVersion);
      if (versionInfo) {
        this.setData({
          compatibilityInfo: versionInfo.compatibleWith,
          installcode: versionInfo.installcode, // 设置安装指令
          errorMessage: '' // 清空错误信息
        });
        console.log('Compatibility found:', versionInfo.compatibleWith);
      } else {
        this.setData({
          compatibilityInfo: null,
          installcode: '', // 清空安装指令
          errorMessage: '未找到匹配的软件版本'
        });
      }
    } else {
      this.setData({
        compatibilityInfo: null,
        installcode: '', // 清空安装指令
        errorMessage: '未找到匹配的软件信息'
      });
    }
  },
  fetchSoftwareList: function () {
    this.setData({
      softwareList: softwareList
    });
  }
});
