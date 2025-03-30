
const { softwareCompatibility } = require('./softwareCompatibility.js');

Page({
  data: {
    softwareName: '',
    softwareVersion: '',
    compatibilityInfo: null,
    errorMessage: '' // 用于存储错误信息
  },
  onLoad: function (options) {
    const { name, version } = options;
    this.setData({
      softwareName: name || '',
      softwareVersion: version || ''
    });
    console.log('Software compatibility query loaded:', this.data);

    this.searchCompatibility();
  },
  onSoftwareNameChange: function (e) {
    this.setData({
      softwareName: e.detail.value
    });
  },
  onSoftwareVersionChange: function (e) {
    this.setData({
      softwareVersion: e.detail.value
    });
  },
  searchCompatibility: function () {
    const { softwareName, softwareVersion } = this.data;

    const softwareInfo = softwareCompatibility.find(software => software.name === softwareName);
    if (softwareInfo) {
      const versionInfo = softwareInfo.versions.find(version => version.version === softwareVersion);
      if (versionInfo) {
        this.setData({
          compatibilityInfo: versionInfo.compatibleWith,
          errorMessage: '' // 清空错误信息
        });
        console.log('Compatibility found:', versionInfo.compatibleWith);
      } else {
        this.setData({
          compatibilityInfo: null,
          errorMessage: '未找到匹配的软件版本'
        });
        console.error('未找到匹配的软件版本');
      }
    } else {
      this.setData({
        compatibilityInfo: null,
        errorMessage: '未找到匹配的软件信息'
      });
      console.error('未找到匹配的软件信息');
    }
  }
});