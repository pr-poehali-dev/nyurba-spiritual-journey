import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки на тур на почту sivail@yandex.ru"""
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    comment = body.get("comment", "").strip()
    tour = body.get("tour", "").strip()

    if not name or not phone:
        return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "Имя и телефон обязательны"})}

    smtp_password = os.environ["GMAIL_APP_PASSWORD"]
    sender = "kutaaxaansergen@gmail.com"
    recipient = "kutaaxaansergen@gmail.com"

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Новая заявка на тур: {tour}"
    msg["From"] = sender
    msg["To"] = recipient

    text = f"""Новая заявка на тур с сайта Нюрба Тур

Тур: {tour}
Имя: {name}
Контакт: {phone}
Комментарий: {comment or 'не указан'}
"""

    html = f"""
<div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #f9f6f0; padding: 32px; border-radius: 12px;">
  <h2 style="color: #a87830; margin-bottom: 4px;">Новая заявка на тур</h2>
  <p style="color: #888; font-size: 14px; margin-top: 0;">Сайт Нюрба Тур</p>
  <hr style="border: none; border-top: 1px solid #e0d5c0; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
    <tr><td style="padding: 8px 0; color: #888; width: 120px;">Тур</td><td style="padding: 8px 0; color: #333; font-weight: bold;">{tour}</td></tr>
    <tr><td style="padding: 8px 0; color: #888;">Имя</td><td style="padding: 8px 0; color: #333;">{name}</td></tr>
    <tr><td style="padding: 8px 0; color: #888;">Контакт</td><td style="padding: 8px 0; color: #333;">{phone}</td></tr>
    <tr><td style="padding: 8px 0; color: #888;">Комментарий</td><td style="padding: 8px 0; color: #333;">{comment or '<i>не указан</i>'}</td></tr>
  </table>
</div>
"""

    msg.attach(MIMEText(text, "plain", "utf-8"))
    msg.attach(MIMEText(html, "html", "utf-8"))

    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()
        server.login(sender, smtp_password)
        server.sendmail(sender, recipient, msg.as_string())

    return {"statusCode": 200, "headers": headers, "body": json.dumps({"ok": True})}