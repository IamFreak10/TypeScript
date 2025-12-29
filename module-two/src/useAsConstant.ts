// as constant assertion
const UserRoles = {
  Admin: 'Admin',
  Editor: 'Editor',
  Viewer: 'Viewer',
} as const;
// !as constant assertion,we can not assign Userroles.Admin="Rakib"; expect "Admin"

const canEdit = (role: keyof typeof UserRoles) => {
  if (role === UserRoles.Admin) {
    return true;
  } else {
    return false;
  }
};
const isEditPermissable = canEdit(UserRoles.Viewer);
console.log(isEditPermissable);
