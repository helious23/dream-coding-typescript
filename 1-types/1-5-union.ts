{
  /**
   *  Union Types: OR
   */

  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("right");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

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
}
