import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import Modal from "react-modal";

function ArticleCard({ articleId, updateArticle }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [articleData, setArticleData] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = async () => {
    handleClose();
    try {
      const response = await axios.get(`http://localhost:5000/articles/${articleId}`);
      const article = response.data.article;
      setOpenPopup(true);
      console.log("Article à modifier :", article);
      updateArticle(article);
      setArticleData(article);
    } catch (error) {
      console.error("Une erreur est survenue lors de la récupération de l'article :", error);
      toast.error("Une erreur est survenue lors de la récupération de l'article");
    }
  };

  const handleDelete = async () => {
    handleClose();
    const confirmDelete = window.confirm("Voulez-vous vraiment supprimer cet article ?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/articles/${articleId}`);
        console.log("Article supprimé avec succès");
        toast.success("Article supprimé avec succès");
      } catch (error) {
        console.error("Une erreur est survenue lors de la suppression de l'article :", error);
        toast.error("Une erreur est survenue lors de la suppression de l'article");
      }
    } else {
      console.log("Suppression annulée");
    }
  };

  const handleSaveChanges = () => {
    // Logique de sauvegarde des modifications de l'article
    console.log("Modifications enregistrées :", articleData);
    setOpenPopup(false);
  };

  const handleCancel = () => {
    // Annuler les modifications et fermer la pop-up
    setOpenPopup(false);
  };

  return (
    <div className="articleCard">
      <Button
        id="article-card-button"
        aria-controls={open ? "article-card-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        ...
      </Button>
      <Menu
        className="article-card-menu"
        id="article-card-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "article-card-button",
        }}
      >
        <MenuItem onClick={handleEdit}>
          <span className="icon-wrapper">
            <EditIcon className="edit-icon" />
          </span>
          Modifier
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <span className="icon-wrapper">
            <DeleteIcon className="delete-icon" />
          </span>
          Supprimer
        </MenuItem>
      </Menu>

 <Modal
  isOpen={openPopup}
  onRequestClose={() => setOpenPopup(false)}
  className="pop-up-container"
  overlayClassName="pop-up-overlay"
>
  <div className="pop-up">
    <h2>Modifier l'article</h2>
    <button onClick={handleCancel}>Annuler</button>
    <div>
      {/* Champs pour les informations de l'article */}
      {articleData && (
        <>
          <div className="form-group">
            <label>Nom</label>
            <input type="text" value={articleData.name} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea value={articleData.description} />
          </div>
          <div className="form-group">
            <label>Quantité</label>
            <input type="number" value={articleData.quantity} />
          </div>
          <div className="form-group">
            <label>Photo</label>
            <img src={articleData.photo} alt="Article" />
          </div>
        </>
      )}
    </div>
    <div className="button-container">
      <button onClick={handleSaveChanges} type="submit">Enregistrer</button>
    </div>
  </div>
</Modal>
      <ToastContainer /> {/* Ajout du container pour les notifications */}
    </div>
  );
}

export default ArticleCard;
