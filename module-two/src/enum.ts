// enum
// set of fixed string literal ek sathe rakhe
enum UserRoles {
  Admin = 'Admin',
  Editor = 'Editor',
  Viewer = 'Viewer',
}
const canEdit = (role: UserRoles) => {
  if (role === UserRoles.Admin) {
    return true;
  } else {
    return false;
  }
};
const isEditPermissable = canEdit(UserRoles.Viewer);
console.log(isEditPermissable)
