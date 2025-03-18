// export const BASE_URL = "http://localhost:9000/api" // local
export const BASE_URL = "https://naac-dev.techicious.store/api" // prod

export const api = {
  auth: {
    login: "/auth/login",
    logout: "/auth/signup",
    roles: "/users/roles"
  },
  criterion: {
    sessions:'/sessions',
    criterions: "/criteria",
    questions: "/criteria/questions",
    answers: "/answers",
    fileUpload: "/answers/uploadfile",
    options:"/questions/options",
    getAnswers: "/answers/subcriteria"
  },
  coc: {
    committees: "/committee",
    conveners: "/committee/users",
    types: "/committee/types",
    nextTypes: "/committee/nexttype",
    getQuestions: "/committee/questions",
    addDescription: "/committee/questions/add/description",
    answers: "/coc/answers",
    getAnswers: "/coc/answers",
    fileUpload: "/coc/answers/uploadfile",
  }
};