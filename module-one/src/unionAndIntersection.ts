// union |

type UserRole = 'admin' | 'user' | 'guest';
const getDashhBord = (role: UserRole) => {
  if (role === 'admin') {
    return 'Admin dashBord';
  } else if ((role = 'user')) {
    return 'User DashBord';
  } else {
    return 'Guest Dashbord';
  }
};

getDashhBord('guest');

// inter section &
type Employe = {
  name: string;
  id: string;
  phoneNo: string;
};
type Manager = {
  designation: string;
  teamSize: number;
};
type EmployeeManger = Employe & Manager;

const ChowdhuryShaheb: EmployeeManger = {
  name: 'Chhonda Shaeb',
  id: '1233',
  phoneNo: '03883',
  designation: 'Manger',
  teamSize: 20,
};
