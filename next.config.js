module.exports = {
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
  exportPathMap: async function (defaultPathMap) {
    console.log("RRR", defaultPathMap);
    return {};
  },
};
