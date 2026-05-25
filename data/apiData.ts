export const apiTestData = {
  users: {
    validUser: {
      name: 'John Doe',
      job: 'QA Engineer',
    },
    updateUser: {
      name: 'Jane Smith',
      job: 'Senior QA Engineer',
    },
  },
  registration: {
    validRegistration: {
      email: 'eve.holt@reqres.in',
      password: 'pistol',
    },
    invalidRegistration: {
      email: 'invalid@test.com',
    },
  },
  login: {
    validLogin: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    },
    invalidLogin: {
      email: 'invalid@test.com',
      password: 'wrongpassword',
    },
  },
};
