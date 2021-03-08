function trimSlash(str) {
  return str.replace(/^\//, '').replace(/\/$/, '');
}

export default function setMenuKey(items = [], parentKey = '') {
  return items.map(item => {
    const { path = '', children = [] } = item;
    const key = [parentKey, trimSlash(path)].join('/');

    if (children.length) {
      return {
        ...item,
        key,
        children: setMenuKey(children, key),
      };
    }

    return { ...item, key };
  });
}
