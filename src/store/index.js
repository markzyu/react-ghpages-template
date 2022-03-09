const KEY_USER_AGREEMENT_READ = "metav1-user-agreement-read";

export const setAgreementRead = boolVal => {
  window.localStorage.setItem(KEY_USER_AGREEMENT_READ, JSON.stringify(boolVal));
}

export const getAgreementRead = () => !!JSON.parse(window.localStorage.getItem(KEY_USER_AGREEMENT_READ));
