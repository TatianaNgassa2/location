import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
export default function Search() {
  return (
    <div className="flex items-center   w-full h-[42px] border-[#E8EBF1] border-2 rounded-lg p-3 gap-2">
      <FontAwesomeIcon icon={faPenNib} size="30" />
      <input
        placeholder="Rechercher une adresse"
        className="border-none focus:outline-none"
      />
    </div>
  );
}
