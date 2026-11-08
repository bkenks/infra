package service

// #Fnox is the shape of an fnox.toml file. It lives here rather than in
// schema so all fnox knowledge is in one file: swapping fnox for something
// else only touches stacks that emit fnox.toml.
#Fnox: {
	root?: bool
	profiles?: {...}
	providers?: {...}
	secrets?: [string]: {
		value!:    string
		provider?: string
	}
}

// #FnoxProviders is the default provider config for derived fnox files.
#FnoxProviders: {
	_name: "onepassword"
	(_name): {
		account: "FUKUXFLIDREQDELXYP2PALUAVY"
		type:    "1password"
		vault:   "infra"
	}
}
