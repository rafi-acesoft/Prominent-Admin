import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";

import Card from "../../../components/card";
import OutlinedButton from "../../../components/outlinedButton";
import AppModal from "../../../components/appModal";
import AddSurgeon from "../add-surgeon/indexold";
import ToggleButton from "../../../components/toggleButton";
import EditSurgeon from "../edit-surgeon/indexold";
import DeleteConfirmationBox from "../../../components/deleteConfirmBox";
import AddCategory from "../add-category";
import EditCategory from "../edit-category";

const ViewCategories = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const hideModal = () => setModalVisible(false);
  const showModal = () => setModalVisible(true);
  const hideEditModal = () => setEditModalVisible(false);
  const showEditModal = () => setEditModalVisible(true);
  const hideDeleteModal = () => setDeleteModalVisible(false);
  const showDeleteModal = () => setDeleteModalVisible(true);

  const data = React.useMemo(
    () => [
      {
        name: "ENT",
      },
      {
        name: "Pediatricians",
      },
      {
        name: "Allergists",
      },
      {
        name: "Dermatologists",
      },
      {
        name: "Ophthalmologists",
      },
      {
        name: "Plastic Surgeons",
      },
      {
        name: "Podiatrists",
      },
      {
        name: "Radiologists",
      },
      {
        name: "Rheumatologists",
      },
      {
        name: "General Surgeons",
      },
      {
        name: "Urologists",
      },
      {
        name: "Oncologists",
      },
      {
        name: "ENT",
      },
      {
        name: "Pediatricians",
      },
      {
        name: "Allergists",
      },
      {
        name: "Dermatologists",
      },
      {
        name: "Ophthalmologists",
      },
      {
        name: "Plastic Surgeons",
      },
    ],
    []
  );

  return (
    <div className="container-data-table">
      <Card className="p-3 table-white-card">
        <div className="data-table">
          <div className="py-3 px-3 table-header">
            <div className="float-end px-3">
              <OutlinedButton title="Add Category" onClick={showModal} />
            </div>
            <div className="table-card-title">Categories</div>
          </div>
          <table className="table-container category-table">
            <thead>
              <tr>
                <th>SL NO</th>
                <th>CATEGORY NAME</th>
                <th>EDIT</th>
                <th>ENABLE/DISABLE</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{val.name}</td>

                  <td>
                    <button className="btn-blank" onClick={showEditModal}>
                      <AiTwotoneEdit size={22} color={"#0A0758"} />
                    </button>
                  </td>
                  <td>
                    <ToggleButton />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            className="float-end pt-3"
            color="primary"
            count={10}
            page={1}
            onChange={() => null}
          />
        </div>
      </Card>
      <AppModal visible={modalVisible} handleClose={hideModal}>
        <AddCategory />
      </AppModal>
      <AppModal visible={editModalVisible} handleClose={hideEditModal}>
        <EditCategory />
      </AppModal>

      <DeleteConfirmationBox
        visible={deleteModalVisible}
        handleClose={hideDeleteModal}
      />
    </div>
  );
};

export default ViewCategories;
