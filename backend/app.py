from flask import Flask, jsonify
import requests
import os
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables (API key)
load_dotenv()

app = Flask(__name__)
CORS(app)  # Allow requests from your React frontend (localhost:3000)

# Replace with your actual API key
API_KEY = os.getenv("API_KEY", "579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b")
RESOURCE_ID = "ee03643a-ee4c-48c2-ac30-9f2f2f26ab72"  # MGNREGA Dataset ID


@app.route("/")
def home():
    return "✅ MGNREGA Flask Backend is Running Successfully!"


@app.route("/api/mgnrega/<state>/<district>")
def get_mgnrega_data(state, district):
    """
    Fetch MGNREGA data from data.gov.in API.
    Filters can be added later if you want specific state/district data.
    """
    try:
        # Construct API URL
        url = (
            f"https://api.data.gov.in/resource/{RESOURCE_ID}"
            f"?format=json&api-key={API_KEY}"
        )

        # Fetch data
        response = requests.get(url)
        response.raise_for_status()  # Raise error for bad response

        # Convert to JSON
        data = response.json()

        # Optionally filter by district/state (if available in API fields)
        filtered = []
        if "records" in data:
            for record in data["records"]:
                # Basic filtering if dataset contains these keys
                if (
                    state.lower() in record.get("state", "").lower()
                    and district.lower() in record.get("district", "").lower()
                ):
                    filtered.append(record)

        return jsonify({
            "status": "success",
            "requested_state": state,
            "requested_district": district,
            "records_found": len(filtered),
            "data": filtered or data.get("records", [])
        })

    except Exception as e:
        print("Error fetching MGNREGA data:", e)
        return jsonify({"status": "error", "message": str(e)}), 500


if __name__ == "__main__":
    app.run(port=8001, debug=True)
