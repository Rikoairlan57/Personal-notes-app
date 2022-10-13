import { useEffect, useState } from "react";
import { getActiveNotes, getArchivedNotes } from "../../utils/network-data";

const useNotes = (active) => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (active === "active") {
      getActiveNotes().then(({ data }) => {
        setNotes(data);
      });
    } else {
      getArchivedNotes().then(({ data }) => {
        setNotes(data);
      });
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [active]);

  return [notes, isLoading];
};

export default useNotes;
