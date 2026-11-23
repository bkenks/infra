// Globals Komodo injects into every Action, so scripts type-check locally.
import { KomodoClient, Types as KomodoTypes } from "komodo_client";

declare global {
  const komodo: ReturnType<typeof KomodoClient>;
  export import Types = KomodoTypes;
}
