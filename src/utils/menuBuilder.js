export const build = async (fetcher) => {
    try {
        let items = await fetcher.getRecordsUsingAxios();

        console.log(`${items.length} items found, building menu...`);

        let result = {};

        for(const item of items) {
            if (item.fields.Live && item.fields['Link Name'] && item.fields['URL']) {
                // do the job here
                let menu = item.fields['Main Menu'];
                let submenu = item.fields['Sub-menu'] || 'Other';

                // get menu of item if exists, create it if not
                let menuItem;
                if (menu in result) {
                    menuItem = result[menu];
                }
                else {
                    result[menu] = {
                        menuName: menu,
                        subMenus: {}
                    };

                    menuItem = result[menu];
                }

                // get submenu of item if exists, create it if not
                // append item to submenu
                if (submenu in menuItem.subMenus) {
                    let subMenuItem = menuItem.subMenus[submenu];

                    subMenuItem.links.push(item.fields);
                }
                else {
                    item.fields.id = item.id;

                    menuItem.subMenus[submenu] = {
                        subMenuName: submenu,
                        links: [ item.fields ]
                    };
                }
            }
        }

        for(const menuName in result) {
            let menuItem = result[menuName];

            for(const subMenuName in menuItem.subMenus) {
                let subMenuItem = menuItem.subMenus[subMenuName];

                subMenuItem.links = subMenuItem.links.sort((a, b) => {
                    return (a["Link Name"] < b["Link Name"] ? -1 : 1);
                });
            }
        }
        
        console.log("menu built, starting app");
        
        return result;
    }
    catch(err) {
        console.error(err.toString());

        return [];
    }
};