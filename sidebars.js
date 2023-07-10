/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: 'tutorial'}],
  faqSidebar: [{type: 'autogenerated', dirName: 'faq'}],
  examplesSidebar: [{type: 'autogenerated', dirName: 'examples'}],
  howdoiSidebar: [{type: 'autogenerated', dirName: 'howdoi'}],
  sdkSidebar: [{type: 'autogenerated', dirName: 'maxoptics_sdk'}],

  // moreSidebar: [{type: 'autogenerated', dirName: 'more'}],

  // tutorialSidebar: [{type: 'autogenerated', dirName: 'tutorial'}],







  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
