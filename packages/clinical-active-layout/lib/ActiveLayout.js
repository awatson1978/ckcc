
ActiveLayout = {
  /**
   * @summary Get the application page width.
   * @locus Client
   * @memberOf ActiveLayout
   * @name getPageWidth
   * @returns {StyleString}
   * @version 1.2.3
   * @example
   * ```html
   * ActiveLayout.getPageWidth();
   * ```
   */
  getPageWidth: function (){
    var width = Session.get('appWidth') - (Session.get('westRule') + Session.get('eastRule'));
    if (Session.get('navIsFullscreen')) {
      return "left: 0px; width: 100%;";
    } else {
      return "left: " + Session.get('westRule') + "px; width: " + width + "px;";
    }
  },
  /**
   * @summary Get the application title.
   * @locus Client
   * @memberOf ActiveLayout
   * @name getAppTitle
   * @returns {String}
   * @version 1.2.3
   * @example
   * ```html
   * ActiveLayout.getPageWidth();
   * ```
   */
  getAppTitle: function (){
    return Session.get('appTitle');
  }
};
