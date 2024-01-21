import { MainProps } from "@/types";
import { FC } from "react";

export interface AccountProps {
  username: string;
}

const Account: FC<MainProps<AccountProps>> = ({ state, updateState }) => {
  return (
    <>
      <form>
        <fieldset>
          <legend>Account</legend>
          <p>
            <label htmlFor="username">
              Username: <span aria-label="required">*</span>{" "}
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={state.username}
              onChange={({ target }) =>
                updateState({ [target.name]: target.value })
              }
            />
          </p>
        </fieldset>
      </form>
    </>
  );
};

export default Account;
