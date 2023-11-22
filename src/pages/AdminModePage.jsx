import ReadOrderFeat from "../features/ReadOrderFeat";
import ReadProductAdmin from "../features/ReadProductAdmin";
import ReadUserAdmin from "../features/ReadUserAdmin";

export default function AdminModePage() {
  return (
    <div className="bg-gray- h-full ">

      <ReadProductAdmin />
      <ReadOrderFeat />
      <ReadUserAdmin />
    </div>
    
  );
}
