/*
 * Creates a normalized object with apps data (including search string)
 * and an array of ids.
 */
export const parseAppsData = (appsList) => appsList.reduce((result, app) => ({
  apps: {
    ...result.apps,
    [app.id]: {
      ...app,
      searchTerms: `
        ${app.name},
        ${app.description},
        ${app.categories},
        ${app.subscriptions.map((sub) => sub.name)}
        `,
    },
  },
  ids: [...result.ids, app.id],
}), {
  apps: {}, ids: [], categoryList: [], categoryApps: {},
});

/*
 * Parses categories into a normalized object of categories containing ids
 * for corresponding apps. And a sorted array of the available categories.
 */
export const parseCategories = (appsList) => appsList.reduce((result, app) => {
  const byCategory = app.categories.reduce((cats, cat) => ({
    ...cats,
    [cat]: [...(result.appsByCategory[cat] ? result.appsByCategory[cat] : []), app.id],
  }), {});

  return {
    ...result,
    list: [
      ...result.list,
      ...app.categories.filter((category) => !result.list.includes(category)),
    ].sort(),
    appsByCategory: {
      ...result.appsByCategory,
      ...byCategory,
    },
  };
}, { list: [], appsByCategory: {} });
