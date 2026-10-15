terraform {
  required_version = ">= 1.10"

  backend "s3" {
    key = "cloudflare/terraform.tfstate"
  }

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5.24"
    }
  }
}