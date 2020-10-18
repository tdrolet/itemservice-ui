provider "google" {
  project = "itemservice"
  credentials = file("/Users/tjd/repos/itemservice/terraform.json")
}


resource "google_project_service" "run" {
  service = "run.googleapis.com"
}

resource "google_app_engine_standard_app_version" "itemserviceapp" {
  version_id = "v1"
  service    = "default"
  runtime    = "nodejs10"

  entrypoint {
    shell = "node ./app.js"
  }

  deployment {
    zip {
      source_url = "https://storage.googleapis.com/itemserviceapp/itemserviceapp.tar.gz"
    }
  }

  env_variables = {
    port = "8080"
  }

  automatic_scaling {
    max_concurrent_requests = 10
    min_idle_instances = 0
    max_idle_instances = 3
    min_pending_latency = "1s"
    max_pending_latency = "5s"
    standard_scheduler_settings {
      target_cpu_utilization = 0.5
      target_throughput_utilization = 0.75
      min_instances = 0
      max_instances = 10
    }
  }

  delete_service_on_destroy = true
}

/*
output "url" {
  value = google_cloud_run_service.my-service.status[0].url
}
*/

/*
output "url" {
  value = google_app_engine_standard_app_version.itemserviceapp.status
}
*/