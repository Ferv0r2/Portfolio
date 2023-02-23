import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "hooks/useToast";
import { QuickButton } from "components/button/QuickButton";

interface Props {
  className: string;
  balance: number;
}

export const QuickMenu: FC<Props> = ({ className, balance }) => {
  const { onUpdate } = useToast();
  const navigate = useNavigate();

  const onLinkedContract = () => navigate("/nft/management");
  const onLinkedEvent = () => navigate("/event/create");
  const onToast = () =>
    onUpdate({
      content: "The license is currently being prepared.",
      type: "primary",
    });
  const onOpen = () => window.open("https://github.com/Ferv0r2");

  const buttonData = [
    {
      title: "New Contract",
      icon: "stack-fill",
      color: "warning",
      onClicked: onLinkedContract,
    },
    {
      title: "New Event",
      icon: "plus",
      color: "primary",
      onClicked: onLinkedEvent,
    },
    {
      title: "License",
      icon: "star",
      color: "danger",
      onClicked: onToast,
    },
    {
      title: "Document",
      icon: "paper",
      color: "success",
      onClicked: onOpen,
    },
  ];

  return (
    <div className={`card ${className}`}>
      <div className="card-body p-0">
        <div className={`px-9 pt-7 card-rounded min-h-200px w-100 bg-danger`}>
          <div className="d-flex flex-stack">
            <h3 className="m-0 text-white fw-bold fs-3">Quick Menu</h3>
          </div>
          <div className="d-flex mt-2 text-center flex-column text-white pt-8">
            <span className="fw-semibold fs-7">You Balance</span>
            <span className="fw-bold fs-2 pt-1">{balance} Klay</span>
          </div>
        </div>
        <div className="card-p mt-n20 position-relative">
          <div className="row row-cols-2 rounded-2 overflow-hidden">
            {buttonData.map((data) => (
              <QuickButton
                key={data.title}
                title={data.title}
                icon={data.icon}
                color={data.color}
                onClicked={data.onClicked}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
