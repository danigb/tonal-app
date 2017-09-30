import React from "react";
import Downshift from "downshift";
import { withLayout } from "../shared/Layout";
import Selector from "../shared/Selector";
import SearchList from "./SearchList";
import tonal from "tonal";

const NAMES = tonal.scale
  .names()
  .sort(
    (a, b) => tonal.scale.intervals(a).length - tonal.scale.intervals(b).length
  );

const filter = term =>
  term === "" ? NAMES : NAMES.filter(name => name.toLowerCase().includes(term));

export default withLayout("scale", ({ tonic }) => (
  <div className="Scales">
    <Selector items={tonal.note.names()} route={i => ["scales", i]} />
    <h1>Scales {tonic && " in " + tonic}</h1>
    <SearchList
      title="Scales"
      type="scale"
      tonic={tonic}
      filter={filter}
      route={(t, name) => ["scale", name, tonic ? tonic : ""]}
    />
  </div>
));
