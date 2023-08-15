import React from "react"; // @ts-ignore
import success from "~/src/assets/icons/success.png";
import Cookies from "js-cookie";

class ModalProp {
  onDismissButton: () => void;
  onDontShowButton: () => void;
}

export const HomeIntroductionModal = ({
  onDismissButton,
  onDontShowButton,
}: ModalProp) => {
  const isPopupDisplayed = () => Cookies.get("popupWelcome") == "true";

  return (
    <>
      <div style={{ zIndex: 109 }} className="drawer-overlay"></div>
      <div
        className={"modal " + (isPopupDisplayed() || true ? "fade show" : "")}
        tabIndex={-1}
        role="dialog"
        style={{ display: "block", zIndex: 110 }}
        id="HomeIntroductionModal"
      >
        <div className="modal-dialog vertically-middle" role="document">
          <div className="modal-content">
            <div className="modal-body text-center">
              <video width="100%" height="auto" autoPlay loop muted>
                <source
                  src={require("url:~/src/assets/media/intro_video.mp4")}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <p className="fs-4 fw-lighter my-2">
                Gamphy Learning adalah sebuah platform game edukatif yang berisi
                materi Gerak Lurus fisika tingkat SMA. Platform ini berisi
                rangkuman materi dan beberapa latihan soal berupa challenge
                dengan sistem level.
              </p>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onDontShowButton()}
              >
                <b>Jangan tampilkan lagi!</b>
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={() => onDismissButton()}
              >
                <b>Tutup</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
