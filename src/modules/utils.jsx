import { Link } from "react-router-dom";

const getItem = (label, key, icon, children) => ({
  key,
  icon,
  label,
  children,
});

export const generateAllMenuItems = (list) =>
  list?.map((item) =>
    getItem(
      item.label,
      item.key,
      (item.icon && item.icon) || undefined,
      (item.children && generateAllMenuItems(item.children)) || undefined
    )
  );

export const generateBreadcrumbItems = (breadcrumbs) => {
  const newBreadcrumbs = [];

  for (let item of breadcrumbs) {
    if (item.link) {
      newBreadcrumbs.push({
        title: <Link to={item.link}>{item.label}</Link>,
      });
    } else {
      newBreadcrumbs.push({ title: item.label });
    }
  }

  return newBreadcrumbs;
};
