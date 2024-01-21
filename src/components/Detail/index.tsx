import { MainProps } from "@/types";
import { FC } from "react";

export interface DetailProps {
  likeCherry: boolean;
}

const Detail: FC<MainProps<DetailProps>> = ({ state, updateState }) => {
  return (
    <>
      <form>
        <fieldset>
          <legend>Details</legend>
          <p>
            <input
              type="checkbox"
              id="cherry"
              name="likeCherry"
              onChange={({ target }) =>
                updateState({ [target.name]: target.checked })
              }
              checked={state.likeCherry}
            />
            <label htmlFor="cherry">I like cherry</label>
          </p>
        </fieldset>
      </form>
    </>
  );
};

export default Detail;
