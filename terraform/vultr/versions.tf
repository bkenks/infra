terraform {
  required_version = ">= 1.10"

  backend "s3" {
    key = "vultr/terraform.tfstate"
  }

  required_providers {
    vultr = {
      source  = "vultr/vultr"
      version = "~> 2.32"
    }
  }
}
