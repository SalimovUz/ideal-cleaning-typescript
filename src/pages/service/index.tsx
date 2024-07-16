import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Service } from "@modal";
import { ServiceTable } from "@ui";
import { service } from "@service";
import Pagination from "@mui/material/Pagination";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [params, setParams] = useState({
    limit: 10,
    page: 1,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    try {
      const response = await service.get(params);
      if (response.status === 200 && response?.data?.services) {
        setData(response?.data?.services);
        let total = Math.ceil(response.data.total / params.limit);
        setCount(total);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params]);

  const handleChangePage = (event, value) => {
    setParams({
      ...params,
      page: value,
    });
  };

  return (
    <>
      <Service open={open} handleClose={handleClose} setData={setData} />
      <div className="flex flex-col gap-4">
        <div className="flex justify-end">
          <Button
            className="hover:scale-110 transition-all duration-400"
            onClick={handleOpen}
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </div>
        <ServiceTable data={data} />
        <Pagination
          count={count}
          page={params.page}
          onChange={handleChangePage}
        />
      </div>
    </>
  );
};

export default Index;
