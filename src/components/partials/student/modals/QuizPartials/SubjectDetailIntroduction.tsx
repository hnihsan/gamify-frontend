import React from "react"; // @ts-ignore
import success from "~/src/assets/icons/success.png";
import Cookies from "js-cookie";

class ModalProp {
  onDismissButton: () => void;
  onDontShowButton: () => void;
}

export const SubjectDetailIntroductionModal = ({
  onDismissButton,
  onDontShowButton,
}: ModalProp) => {
  const isPopupDisplayed = () => Cookies.get("popupSubjectDetail") == "true";

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
            <div className="modal-body">
              <p className="fs-2x fs-bold text-center">Instruksi</p>
              <p>
                Mulai mengerjakan <i className="text-dark">challenge</i> dengan
                menekan tombol "<strong>Kerjakan</strong>". <br />
                <br />
                <i className="text-dark">Challenge</i> dengan tingkat kesulitan
                yang lebih tinggi akan terbuka seiring dengan diselesaikannya
                challenge yang lebih mudah. <br />
                <br />
                Selesaikan <i className="text-dark">challenge</i> dengan jumlah
                skor minimal mencapai <i className="text-dark">passing grade</i>{" "}
                untuk dianggap berhasil menyelesaikan{" "}
                <i className="text-dark">challenge</i>. <br />
                <br />
                Skor yang didapat dari <i className="text-dark">
                  challenge
                </i>{" "}
                akan diakumulasi sebagai poin untuk naik ke level selanjutnya.{" "}
                <br />
                <br />
                Dapatkan skor sempurna dan menjadi unggul di{" "}
                <i className="text-dark">Leaderboard</i>!
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
