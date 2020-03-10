module.exports = {
  stories: ["../src/**/*.stories.(js|mdx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-docs",
    "@storybook/addon-contexts/register",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y/register"
  ]
};
