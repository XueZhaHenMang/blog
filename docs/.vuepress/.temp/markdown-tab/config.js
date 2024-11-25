import { CodeTabs } from "/Users/kzf/projects/nodejsProject/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.61_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_obhc3oqkkvd7sjalxsnhhfeaqm/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/kzf/projects/nodejsProject/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.61_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_obhc3oqkkvd7sjalxsnhhfeaqm/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/kzf/projects/nodejsProject/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.61_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_obhc3oqkkvd7sjalxsnhhfeaqm/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
