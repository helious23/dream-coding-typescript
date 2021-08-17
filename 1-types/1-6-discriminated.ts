{
  // function : login -> success or fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "Logged In!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success => 🎉 body
  // fail => 😭 reason

  function printLoginState(state: LoginState): void {
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
  const successState: SuccessState = {
    result: "success",
    response: {
      body: "Logged In!",
    },
  };

  const failState: FailState = {
    result: "fail",
    reason: "Fail to login",
  };

  printLoginState(successState);
  printLoginState(failState);
}
