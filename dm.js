"""
DUMMY SECRETS FILE FOR TESTING SCANNERS
WARNING: This file contains FAKE credentials. 
DO NOT use these in production. 
Use this file to test if your python script catches them.
"""

import os

def database_connect():
    # TEST 1: Standard High Entropy / Library Detection (AWS)
    # The scanner should catch 'AKIA...' and the high entropy string below.
    aws_access_key = "AKIAIMNOJVMGFQEXAMPLE"
    aws_secret_key = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"

    # TEST 2: Google API Key Pattern
    # Matches regex: AIza[0-9A-Za-z\-_]{35}
    google_maps_key = "AIzaSyD-ExampleKeyForTestingPurposes123"

    # TEST 3: The "Smart" Heuristic Logic (Ambiguous keywords)
    # The standard library usually ignores 'pass' to avoid syntax errors.
    # Your "Smart" script should catch these because of the assignment (=).
    pass = "SuperSecretPassword123!"
    pwd = 'db_password_root'
    user_pass = "admin:admin123"
    
    # TEST 4: Slack Token
    

    # TEST 5: Private Key Header
    # Most scanners look for the BEGIN PRIVATE KEY header
    rsa_key = """
    -----BEGIN RSA PRIVATE KEY-----
    MIIEpQIBAAKCAQEA3Tz2mr7SZiAMfQyuvBjM9Oi...
    ...dummy content...
    -----END RSA PRIVATE KEY-----
    """

    # TEST 6: Connection String (URI format)
    # Scanners often look for '://user:pass@' patterns
    db_url = "postgres://admin:password123@localhost:5432/production_db"

    return True

# TEST 7: JSON Style (simulated)
config = {
    "stripe_key": "sk_test_4eC39HqLyjWDarjtT1zdp7dc",
    "auth_token": "ghp_123456789012345678901234567890123456"
}
