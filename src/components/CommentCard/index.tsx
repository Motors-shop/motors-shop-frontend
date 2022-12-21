import UserChip from "../UserChip";
import { ThemeCard } from "./style";

const CommentCard = () => {
  return (
    <ThemeCard>
      <div>
        <UserChip name="Samuel Leão" />
        <span>há 3 dias</span>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
      </p>
    </ThemeCard>
  );
};

export default CommentCard;
